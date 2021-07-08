import { fetchFromURL } from './FetchAPI';
import AppConstants from '../AppConstants';

export const getLatestTweets = async({ fromid, limit }) => {
    return fetchFromURL(`${AppConstants.API_BASE_URL}/tweets/latest`, { fromid: fromid, maxresults: limit });
}
