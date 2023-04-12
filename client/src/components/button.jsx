import { Button } from 'antd';
import '../styles/button.css';
function Smallbutton (props){
    return (
        <Button className='green'>{props.type}</Button>
    );
}

export default Smallbutton;