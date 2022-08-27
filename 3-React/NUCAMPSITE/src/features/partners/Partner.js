

const Partner = ({partner}) => {
    console.log(`${partner}`);

    if (partner) {
        const{image,name,description} = partner;
        return (
            <>
            <img src={image} alt={name} style={{ width: '150px' }}/>
           <div>
           <h5 className='fw-bold'>{name}</h5>
            {description}
           </div>
            </>
         );

    }
    return null;
    };
    

    export default Partner;  