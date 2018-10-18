using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authentication.OAuth;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;

namespace WebApplication
{ 
    public class Startup
    {
        private readonly IHostingEnvironment _env;
        private readonly IConfiguration _config;
        private readonly ILoggerFactory _loggerFactory;
        
        public Startup(IConfiguration conf, IHostingEnvironment env, ILoggerFactory log)
        {
            _config = conf;
            _env = env;
            _loggerFactory = log;
        }
        
        
        public void ConfigureServices(IServiceCollection services)
        {   
            services
                .AddAuthentication(o =>
                {
                    o.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                    o.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                    o.DefaultChallengeScheme = "GitHub";
                })
                .AddCookie()
                .AddOAuth("GitHub", o =>
            {
                o.CallbackPath = "/signin-github";
                o.ClientId = "584202dc6631212053db";
                o.ClientSecret = "fbbb3bd8cb241a10079b350fa7edc143c16952ef";
                o.AuthorizationEndpoint = "https://github.com/login/oauth/authorize";
                o.TokenEndpoint = "https://github.com/login/oauth/access_token";
                o.UserInformationEndpoint = "https://api.github.com/user";
                
                o.Scope.Add("user:email");

                // Define how to map returned user data to claims
                o.ClaimActions.MapJsonKey(ClaimTypes.NameIdentifier, "login");
                //o.ClaimActions.MapJsonKey(ClaimTypes.Email, "EmailAddress", ClaimValueTypes.Email);
                //options.ClaimActions.MapJsonKey(ClaimTypes.Name, "Name");
                
                o.Events = new OAuthEvents
                {
                    // After OAuth2 has authenticated the user
                    OnCreatingTicket = async context =>
                    {
                        // Create the request message to get user data via the backchannel
                        var request = new HttpRequestMessage(HttpMethod.Get, context.Options.UserInformationEndpoint);
                        request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", context.AccessToken);
                    
                        // Additional header if needed. Here's an example to go through Azure API Management 
                        //request.Headers.Add("Ocp-Apim-Subscription-Key", "<given key>");
                    
                        request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                        // Query for user data via backchannel
                        var response = await context.Backchannel.SendAsync(request, context.HttpContext.RequestAborted);
                        response.EnsureSuccessStatusCode();

                        // Parse user data into an object
                        var user = JObject.Parse(await response.Content.ReadAsStringAsync());

                        // Store the received authentication token somewhere. In a cookie for example
                        context.HttpContext.Response.Cookies.Append("token", context.AccessToken);                    

                        // Execute defined mapping action to create the claims from the received user object
                        context.RunClaimActions(JObject.FromObject(user));
                    },
                    OnRemoteFailure = context =>
                    {
                        context.HandleResponse();
                        context.Response.Redirect("/Home/Error?message=" + context.Failure.Message);
                        return Task.FromResult(0);
                    }                
                };
            });
            
            
            
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseAuthentication();
            
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                //app.UseHsts();
            }
             
            var options = new DefaultFilesOptions();
            options.DefaultFileNames.Clear();
            options.DefaultFileNames.Add("index.html");
            app.UseDefaultFiles(options);
            
            app.UseStaticFiles(); 
            
              
            //app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}