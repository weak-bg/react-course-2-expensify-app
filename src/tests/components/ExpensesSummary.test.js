import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";

test('should render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[1]]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with many expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});