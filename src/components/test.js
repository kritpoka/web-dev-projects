function Test(){
    const elements = [{title:'one'}, {title:'two'}, {title:'three'}];
    return (
        <ul>
            {elements.map(({title}, index) => {
                return <li key={index}>{title}</li>
            })}
        </ul>
    );
}
export default Test;