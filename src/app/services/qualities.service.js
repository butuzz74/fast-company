import httpService from "./http.service";

const qualityEndpoint = "quality/";

const qualitiesService = {
    get: async () => {
        const { data } = await httpService.get(qualityEndpoint);
        return data;
    }
};

export default qualitiesService;
