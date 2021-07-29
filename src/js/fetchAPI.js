import toastr from 'toastr';
import 'toastr/build/toastr.css';

toastr.options = {
  closeButton: true,
  debug: true,
  newestOnTop: false,
  progressBar: true,
  positionClass: 'toast-top-center',
  preventDuplicates: false,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

export default class FetchAPI {
  constructor() {
    this.API_KEY = '05b27f765345223aac972c2dbb5eec37';
  }

  async searchByTrending(timePeriod = `week`, page = 1) {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/${timePeriod}?api_key=${this.API_KEY}&page=${page}`,
    );
    if (response.ok) {
      return await response.json();
    }
    toastr.error('Unsuccessful results. Try again!');
    throw new Error(await response.text());
  }

  async searchByInputQuery(query, page = 1) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`,
    );

    if (response.ok) {
      return await response.json();
    }
    toastr.error('Unsuccessful results. Try again!');
    throw new Error(await response.text());
  }

  async searchByMovieId(id, language = `en-US`) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}&language=${language}`,
    );

    if (response.ok) {
      return await response.json();
    }
    toastr.error('Unsuccessful results. Try again!');
    throw new Error(await response.text());
  }

  async getGenres(language = `en-US`) {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.API_KEY}&language=${language}`,
    );

    if (response.ok) {
      return await response.json();
    }
    toastr.error('Unsuccessful results. Try again!');
    throw new Error(await response.text());
  }
}
