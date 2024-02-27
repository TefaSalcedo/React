import PropTypes from 'prop-types';

export const FirsAppt=( {title, subTitle,name} )=>{

    return (
        <>
        <h1>{title}</h1>
        <p> {subTitle}</p>
        <p>{name}</p>
        </>
        
    )
}

FirsAppt.propTypes={
    title:PropTypes.string,
    subTitle:PropTypes.string,
}

FirsAppt.defaultProps={
    title:`No hay título`,
    subTitle:`No hay Subtítulo`,
    name:`Estefania Salcedo`,
}