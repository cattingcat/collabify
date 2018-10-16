﻿using System;
using Microsoft.AspNetCore.Authentication.OAuth;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace WebApplication
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // configure identity server with in-memory stores, keys, clients and scopes
//            services.AddIdentityServer()
//                .AddDeveloperSigningCredential();
//                .AddInMemoryIdentityResources(Config.GetIdentityResources())
//                .AddInMemoryApiResources(Config.GetApiResources())
//                .AddInMemoryClients(Config.GetClients())
//                .AddTestUsers(Config.GetUsers());
            
            services.AddAuthentication().AddGoogle(googleOptions =>
            {
                googleOptions.ClientId = Configuration["Authentication:Google:ClientId"];
                googleOptions.ClientSecret = Configuration["Authentication:Google:ClientSecret"];
                //googleOptions.AuthorizationEndpoint = "/signin-google";
                //googleOptions.TokenEndpoint = "/token";
                googleOptions.CallbackPath = new PathString("/signin-google");
                /*googleOptions.Events.OnTicketReceived = context =>
                {
                    Console.WriteLine("sfsdfsdf");
                    return null;
                };*/

                googleOptions.Events = new OAuthEvents
                {
                    
                };
            });
            
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }
            
            var options = new DefaultFilesOptions();
            options.DefaultFileNames.Clear();
            options.DefaultFileNames.Add("index.html");
            app.UseDefaultFiles(options);
            
            app.UseStaticFiles();

            app.UseAuthentication();

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}