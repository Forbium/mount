import { Grid, Button, Divider } from '@geist-ui/core'
import {ArrowRight} from '@geist-ui/icons'


function MenuItem(props) {

    

    return (
        <>
            {props.child != 1 && <Divider className='fadein' style={{width:'100%', animationDelay: `${props.child * 50}ms`}} />}
            <Grid xs={24} direction='row' alignItems='center'>
                <div className="menu--item-cell fadein" style={{animationDelay: `${props.child * 50}ms`}}>
                    {props.icon}
                    <p className='menu--item'>{props.text}</p>        
                </div>
            </Grid>
        </>

    )
}

export default MenuItem