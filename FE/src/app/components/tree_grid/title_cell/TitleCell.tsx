import * as React from 'react';
import './title_cell.scss';
import { CollapseIcon } from 'kit/collapse_icon/CollapseIcon';

interface TitleCellProps {
    readonly level: number;
    readonly hasChildren: boolean;
    readonly isExpanded: boolean;
    readonly title: string;
    readonly className?: string;
}

interface TitleCellState {
    isEditable: boolean;
}

export class TitleCell extends React.Component<TitleCellProps, TitleCellState> {
    private _formRef: React.RefObject<HTMLFormElement>;

    constructor(props: TitleCellProps) {
        super(props);
        this.state = {isEditable: false};
        this._handleDbClick = this._handleDbClick.bind(this);
        this._handleClickOutside = this._handleClickOutside.bind(this);
        this._handleFormSubmit = this._handleFormSubmit.bind(this);

        this._formRef = React.createRef();
    }

    render(): JSX.Element {
        const classes = `title_cell ${this.props.className}`;
        const p = this.props;
        const s = this.state;
        const paddingLeft = p.level * 10;
        const titleStyle: React.CSSProperties = {paddingLeft: `${paddingLeft}px`};

        let collapseIcon = null;
        if(p.hasChildren) {
            collapseIcon = <CollapseIcon 
                className='collapse_expand_icon'
                isExpanded={p.isExpanded}>
            </CollapseIcon>;
        } else {
            collapseIcon = <div className='expand_icon_placeholder'></div>;
        }

        return <div 
            style={titleStyle}
            className={classes}
            onDoubleClick={this._handleDbClick}>

            {collapseIcon} 

            {s.isEditable ? (
                <form 
                    action="" 
                    ref={this._formRef}
                    onSubmit={this._handleFormSubmit}>
                    <input type="text" name="" id=""/>
                </form>
            ) : (
                <div className='title_text'>{p.title}</div>    
            )}
        </div>
    }


    private _handleDbClick(): void {
        this.setState({isEditable: true});
        document.addEventListener('click', this._handleClickOutside);
    }

    private _handleClickOutside(e: MouseEvent): void {
        const target = e.target;
        const isFormClick = target instanceof HTMLElement 
            && this._formRef.current.contains(target);

        if(!isFormClick) {
            this.setState({isEditable: false});
            document.removeEventListener('click', this._handleClickOutside);
        }
    }

    private _handleFormSubmit(event: React.FormEvent): void {
        event.preventDefault();

        console.log('QQQQ');
    }
}