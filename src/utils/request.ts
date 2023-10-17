import mockData from './mock';

export default function request(url: string) {
    return Promise.resolve(mockData[url]);
}