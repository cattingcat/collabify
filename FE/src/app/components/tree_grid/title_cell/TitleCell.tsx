import * as React from 'react';
import './title_cell.scss';
import { CollapseIcon } from 'kit/collapse_icon/CollapseIcon';

interface TitleCellProps {
    readonly level: number;
    readonly hasChildren: boolean;
    readonly isExpanded: boolean;
    readonly title: string;
    readonly className?: string;

    readonly onExpand?: () => void;
    readonly onTextSubmit?: (text: String) => void;
}

interface TitleCellState {
    isEditable: boolean;
}

export class TitleCell extends React.Component<TitleCellProps, TitleCellState> {
    private readonly _formRef: React.RefObject<HTMLFormElement>;
    private readonly _inputRef: React.RefObject<HTMLInputElement>;

    constructor(props: TitleCellProps) {
        super(props);

        this.state = {isEditable: false};
        this._handleDbClick = this._handleDbClick.bind(this);
        this._handleClickOutside = this._handleClickOutside.bind(this);
        this._handleFormSubmit = this._handleFormSubmit.bind(this);

        this._formRef = React.createRef<HTMLFormElement>();
        this._inputRef = React.createRef<HTMLInputElement>();
    }

    render(): JSX.Element {
        const p = this.props;
        const s = this.state;
        const classes = `title_cell ${p.className}`;
        const paddingLeft = 10 + p.level * 10;
        const titleStyle: React.CSSProperties = {paddingLeft: `${paddingLeft}px`};

        let collapseIcon = null;
        if(p.hasChildren) {
            collapseIcon = <CollapseIcon 
                className='collapse_expand_icon'
                isExpanded={p.isExpanded}
                onClick={p.onExpand}>
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
                    <input ref={this._inputRef} type="text" name="" id=""/>
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
        this.props.onTextSubmit && 
            this.props.onTextSubmit(this._inputRef.current.value);
    }
}