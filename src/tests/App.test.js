import { render, screen } from '@testing-library/react';
import App from '../App';

test('TweetsList should look for tweets', () => {
  render(<App />);
  const tweetsListLoader = screen.getByText("Obteniendo tweets..");
  expect(tweetsListLoader).toBeInTheDocument();
});
