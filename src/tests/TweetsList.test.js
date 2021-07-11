import { render, screen } from '@testing-library/react';
import TweetsList from '../components/TweetsList';

test('TweetsList should look for tweets', () => {
  let loaderTestId = "tweets-list-loader";
  let loader = <p data-testid={loaderTestId}>Buscando tweets</p>;
  render(<TweetsList loader={loader} />);
  const tweetsListLoader = screen.getByTestId(loaderTestId);
  expect(tweetsListLoader).toBeInTheDocument();
});
