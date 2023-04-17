import useSWR from 'swr';
import axios from '../helpers/axios.helper.'; //usamos el axios personalizado, para hacer esas configuraciones
import {
  ImagesUpload,
  PublicationForm,
  PublicationResponse,
} from '../interfaces/publications.interface';

function usePublications({ categoryId }: { categoryId?: string } = {}) {
  const url = categoryId
    ? `/publications?publications_types_ids=${categoryId}`
    : '/publications/';

  const { data, error, isLoading, mutate } = useSWR<PublicationResponse>(url);

  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}

function createPublications(data: PublicationForm) {
  return axios.post('/publications', data);
}

function votePublications(publicationID: string) {
  return axios.post(`/publications/${publicationID}/vote`);
}

function addImage(publicationID: string, data: ImagesUpload) {
  return axios.post(`/publications/${publicationID}/add-image`, data);
}

export { usePublications, createPublications, votePublications, addImage };
