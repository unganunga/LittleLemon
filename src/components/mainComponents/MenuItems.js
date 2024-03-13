import Card from "./card";

function MenuItems({ children }) {

    const menuList = [
        {
            title: "Food item 1",
            price: "$14:50",
            description: "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground."
        },
        {
            title: "Food item 2",
            price: "$14:50",
            description: "The bee, of course, flies anyway because bees don't care what humans think is impossible."
        },
        {
            title: "Food item 3",
            price: "$14:50",
            description: "Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little."
        },
        {
            title: "Food item 4",
            price: "$14:50",
            description: "Barry! Breakfast is ready! Coming! Hang on a second. Hello? Barry? Adam? Can you believe this is happening?"
        },
        {
            title: "Food item 5",
            price: "$14:50",
            description: "I can't. I'll pick you up. Looking sharp. Use the stairs. Your father paid good money for those."
        },
        {
            title: "Food item 6",
            price: "$14:50",
            description: "Sorry. I'm excited. Here's the graduate. We're very proud of you, son. A perfect report card, all B's."
        },
        {
            title: "Food item 7",
            price: "$14:50",
            description: "Very proud. Ma! I got a thing going here. You got lint on your fuzz. Ow! That's me! Wave to us! We'll be in row 118,000."
        },
        {
            title: "Food item 8",
            price: "$14:50",
            description: "Bye! Barry, I told you, stop flying in the house! Hey, Adam. Hey, Barry. Is that fuzz gel? A little. Special day, graduation."
        },
        {
            title: "Food item 9",
            price: "$14:50",
            description: "Never thought I'd make it. Three days grade school, three days high school... Those were awkward. Three days college."
        },
    ];

    const menuCardList = menuList.map(item => {
        return(
        <Card key={item.title}>
            <div style={{display: "block", height: "90px"}}>
            <div className="titlePrice">
            <h1 className="cardH1">{item.title}</h1>
            <p className="cardP">{item.price}</p>
            </div>
            <div style={{borderStyle: "inset", borderWidth: "1px", borderColor: "light-grey", marginLeft: "20px", marginRight: "20px"}}></div>
            </div>
            <p className="cardP">{item.description}</p>
            <div className="delivery" style={{marginBottom: "10px"}}>
                    {children}
                </div>
        </Card>
        )
    })
    return(
        <>{menuCardList}</>
    )
}

export default MenuItems;