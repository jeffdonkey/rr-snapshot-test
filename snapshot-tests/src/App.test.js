import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'

test ('renders a snapshot', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
// variable tree is set to "renderer.create". This renders the element and creats a
//    special output that has a "toJSON" method

// "toJSON" is important because ti turns the component representation into JSON.
//    The JSON representation is an easier read of the data

// the link "expect(tree).toMatchSnapshot()" compares the saved snapshot to the new snapshot.
//    If there is not a saved snapshot when the code runs then a snapshot is created

// Jest will look in a special directory, "_snapshots_", for a snapshot that matches the test file currently running.