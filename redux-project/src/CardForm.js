import React from 'react';
import { connect } from 'react-redux';

export const CardForm = props => {    
    const { onChange, form: { name, tag } } = props;
    return (
        <div>
            <form >
                <div>Nombre:<input type="text" name="name" onChange={evt => onChange(evt)} value={name} /></div>
                <div>Tag:<input name="tag" onChange={evt => onChange(evt)} type="text" value={tag} /></div>                            
            </form>
        </div>
    );
};



export default connect(state=> ({ form: state.form }), null )(CardForm);
