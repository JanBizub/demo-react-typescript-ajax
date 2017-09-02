import * as React from 'react';

import { Header } from './Header'
import { Records, Record } from './Records'
import { DogsDao } from '../data-access-layer/index';

export interface AppState {
    IsDisplaying: boolean
    Records: Record[]
}

export class App extends React.Component<any, AppState> {
    constructor( props: any ) {
        super( props )

        this.state = { IsDisplaying: false, Records: null }
    }

    showFunction = () => {
        let transformData = (value: string, key: number): Record => {
            return { Id: key, Text: value }
        }

        let onSuccess = ( data : any) => {
            this.setState( ( ps: AppState, props: any ) => {
                return ( { IsDisplaying : true, Records: data.map(transformData) })
            } )
        }

        let onError = (error: any) => {
            console.log(error)
        }

        DogsDao.getDogs( 'https://dog.ceo/api/breeds/list/all', onSuccess, onError )
    }
    hideFunction = () => {
        this.setState( { IsDisplaying: false, Records: null } )
    }

    render() {
        return (
            <div>
                <Header
                    isDisplaying={ this.state.IsDisplaying }
                    onShow={ this.showFunction }
                    onHide={ this.hideFunction }/>

                <Records RecordItems={ this.state.Records }/>
            </div>)
    }
}