import { fetchFromURL } from './FetchAPI';
import AppConstants from '../AppConstants';

export const getLatestTweets = async({ untilid, limit }) => {
    return fetchFromURL(`${AppConstants.API_BASE_URL}/tweets/latests`, { untilid, limit });
}
