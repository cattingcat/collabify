import * as React from 'react';
import { SpaceModel } from 'components/space_panel/SpaceModel';
import { AvatarImage } from 'kit/avatar/AvatarImage';
import './settings_item.scss';
import { IconButton } from 'kit/icon_button/IconButton';

export interface SettingsItemModel {
    readonly showInfo: boolean;
    readonly title: string;
    readonly className?: string
    readonly onClick?: () => void;
}

export class SettingsItem extends React.Component<SettingsItemModel> {
    render(): JSX.Element {
        const settingsTitleClasses = this.props.showInfo ? '' : 'hidden';
        const classNames = `settings-item ${this.props.className}`;
        const handleClick = this.props.onClick;

        return <div className={classNames} onClick={this.props.onClick}>
            <IconButton 
                size='small'
                className='settings-icon'
                onClick={handleClick}>
            </IconButton>
            <div className={`settings-title ${settingsTitleClasses}`}>
                some settings
            </div>
        </div>
    }
}