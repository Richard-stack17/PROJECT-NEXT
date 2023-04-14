import useSWR from 'swr';
import axios from '../helpers/axios.helper.'; //usamos el axios personalizado, para hacer esas configuraciones
import {
  Publication,
  PublicationResponse,
} from '../interfaces/publications.interface';

function usePublications() {
  const { data, error, isLoading, mutate } = useSWR<PublicationResponse>(
    '/publications' //'https://paracuando-academlo-api.academlo.tech/api/v1/publications'
  );
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}

function createPublications(data: Publication) {
  return axios.post('/publications', data);
}

/*function getPublications() {
  return axios.get(
    'https://paracuando-academlo-api.academlo.tech/api/v1/publications'
  );
}*/

function votePublications(publicationID: string) {
  return axios.post(`/publications/${publicationID}/vote`);
}

export { usePublications, createPublications, votePublications };
