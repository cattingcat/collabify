import * as React from 'react';
import './settings_item.scss';
import { IconButton } from 'kit/icon_button/IconButton';

export interface SettingsItemModel {
    readonly showInfo: boolean;
    readonly title: string;
    readonly className?: string
    readonly icon: string;
    readonly onClick?: () => void;
}

export class SettingsItem extends React.Component<SettingsItemModel> {
    render(): JSX.Element {
        const p = this.props;
        const settingsTitleClasses = p.showInfo ? '' : 'hidden';
        const classNames = `settings-item ${p.className}`;
        const handleClick = p.onClick;

        return <div className={classNames} onClick={p.onClick}>
            <IconButton 
                icon={p.icon}
                size='small'
                className='settings-icon'
                onClick={handleClick}>
            </IconButton>
            <div className={`settings-title ${settingsTitleClasses}`}>
                {p.title}
            </div>
        </div>
    }
}