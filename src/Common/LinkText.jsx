{/*function LinkText({text, link}) {
    return (
        <>
           <span className="inline common" target="_blank"><a href={link} className="dark:text-darkModeHeading 
           bg-lightModeHeading  text-lightModeHeading dark:bg-darkModeHeading">{text}</a></span>
        </>
    )
}
export default LinkText
*/}
function LinkText({ text, link }) {
    return (
      <>
        <span className="inline common" target="_blank">
          <a href={link} className="dark:text-darkModeHeading  text-lightModeHeading ">
            {text}
          </a>
        </span>
      </>
    );
  }
  
  export default LinkText;
  