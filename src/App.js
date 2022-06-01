import React, {useState} from "react";
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';



const items = [
    {
        question: 'Who are you?',
        answer: "Hi, I'm Elena"
    },
    {
        question: 'What do you do for living?',
        answer: "I'm a front end developer"
    },
    {
        question: 'What was your biggest dream that came true?',
        answer: 'To hug a real panda!'
    }
];

const options = [
    {   label: 'Not Selected',
        value: null
        
    },
    {
        label: 'Johnny Cage',
        value: 'CJohnny Cage'
    },
    {
        label: 'Shang Tsung',
        value: 'Shang Tsung'
    },
    {
        label: 'Sub-Zero',
        value: 'Sub-Zero'
    },
    {
        label: 'Scorpion',
        value: 'Scorpion'
    }
];


export default () => { 
    const [selected, setSelected] = useState(options[0]);
    console.log("hi");

    return (
        <div>
            <Header />
            <Route path="/"> 
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label="Choose Your Destiny"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};