import React from 'react';
import About from '../../components/about/About';
import Title from '../../components/title/Title';

function MainPage() {
    return (
        <div>
            <Title text="Hello world" />
            <About info={{ title: "Some Title", body: "Some body" }} />
        </div>
    );
}

export default MainPage;