const CreateBox = ({name}) => {

    console.log(name);

    const onClickBox = () => {
        console.log('test click');
    }

    return (
        <div className="box" onClick={onClickBox}>
            <p>{name}</p>            
        </div>
    )
}


export default CreateBox