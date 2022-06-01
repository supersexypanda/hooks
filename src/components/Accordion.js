import React, {useState} from "react";

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onQuestionClick = (index) => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
        <React.Fragment key={item.question}>
            <div className={`question ${active}`} onClick={() => onQuestionClick(index)}>
                <i className="dropdown icon"></i>
                {item.question}
            </div>
            <div className={`answer ${active}`}>
                <p>{item.answer}</p>
            </div>
        </React.Fragment>
        );
    })

    return <div className="ui styled accordion">{renderedItems}</div>
};

export default Accordion;