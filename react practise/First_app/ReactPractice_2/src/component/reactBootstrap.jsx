import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
const reactBootstrap = () => {
    return (
    <Card style={{width: "20rem"}} > 
        <h1>Card title</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae inventore maxime ipsa voluptas in expedita dolor modi assumenda vero? Quidem, illum. Quos accusamus quisquam numquam animi temporibus dolores soluta tempora.</p>
        {/* <Button variant="primary">Primary</Button>{' '} */}
        <Button>Learn more</Button>
    </Card>);
}


export default reactBootstrap;