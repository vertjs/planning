import React from 'react';
import Page from '../components/Page'
import Counter from './Counter';
import Input from './Input';

export default function UseState() {
    return (
        <Page id="useState">
            <Counter />
            <Input />
        </Page>
    )
}