import React from 'react';

const Child = props => {
  console.log('child rendered!', props);

  return <span>{ props.text }</span>;
};


class Child1 extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.text !== this.props.text;
  };

  componentDidUpdate() {
    console.log('child1 updated!');
  };

  render() {
    console.log('child1 rendered!', this.props);
    return <span>{ this.props.text }</span>;
  };
}


class Child3 extends React.PureComponent {
  componentDidUpdate() {
    console.log('child pure updated');
  };

  render() {
    console.log('child pure rendered');
    return <span>{ this.props.text }</span>
  };
}


const Child4 = React.memo(Child, (prevProps, nextProps) => {
  return prevProps.text === nextProps.text;
});


const Child5 = React.memo(Child);


export const OptimisationComp = () => {
  return <div>
    <Child text="Child 1: Function component" />
    <hr />
    <Child1 text="Child 2: Class component with shouldComponentUpdate()" />
    <br />
    <Child3 text="Child 3: Class Pure component" />
    <hr />
    <Child4 text="Child 4: Function component from React.memo" />
    <br />
    <Child5 text="Child 5: Function component React.memo without second argument" />
  </div>;
};
