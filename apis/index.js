import axios from 'axios';
import { createHTTPHeader } from './util';
import Router from 'next/router';
import { paramsObjectToQueryString } from './paramObjectToQuery';
import { toast } from 'sonner';
import { BASE_URL } from '../utility/constants';
import secureLocalStorage from 'react-secure-storage';
import { message } from 'antd';

axios.interceptors.response.use(undefined, err => {
  if (err.response.status != 200 || err.response.status != 201) {
    if (err.code === 'ERR_NETWORK') {
      message.error('Network Error, please try again');
    }
    if (err.response.status == 401) {
      toast.error('Please login to continue');
    } else {
      console.log(err);
    }
  }
  if (err.response.status == 401) {
    Router.push('/');
  }

  return Promise.reject(err);
});

const api = {



  fetchIncidents: (token, query) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/incident/incident-statuses/16`;
    return api.get(url, headers);
  },

  fetchNPFIncidents: (token, query) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/incident/police-incidents/10,18`;
    return api.get(url, headers);
  },

  fetchBanksIncidents: (token, query) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/incident/incident-by-bank/10`;
    return api.get(url, headers);
  },

  fetchSingleIncidents: (token, id) => {
    console.log("THE TOKEN:", token)
    const headers = createHTTPHeader(token);
    console.log("THE HEADER:", headers)
    const url = `${BASE_URL}/incident/incident/${id}`;
    return api.get(url, headers);
  },

  login: payload => {
    const headers = createHTTPHeader(null);
    const url = `${BASE_URL}/user/login-admin`;
    return api.post(url, payload, headers);
  },

  getRoles: (token, query) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/roles${paramsObjectToQueryString(query)}`;
    return api.get(url, headers);
  },

  updateAssignIncidents: () => {
    const url = `${BASE_URL}/incident/update-incident-status/${id}`;
  },

  editMemberProfile: (payload, token, userId) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/user/${userId}`;
    return api.post(url, payload, headers);
  },

  editMemberPassword: (payload, token, userId) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/change-password/${userId}`;
    return api.patch(url, payload, headers);
  },

  updateModalSetup: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/update-setup`;
    return api.patch(url, payload, headers);
  },

  updateBlockerStatus: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/update-blocker`;
    return api.patch(url, payload, headers);
  },

  assignBlocker: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/assign-blocker`;
    return api.patch(url, payload, headers);
  },

  createTeam: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/post-team`;
    return api.post(url, payload, headers);
  },

  createSetup: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/setup`;
    return api.post(url, payload, headers);
  },

  postComment: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/comments`;
    return api.post(url, payload, headers);
  },

  postGithubEmail: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/integrations-github/email`;
    return api.post(url, payload, headers);
  },

  postGitlabEmail: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/integrations-gitlab/email`;
    return api.post(url, payload, headers);
  },

  validateGitlab: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/gitlab-validate-username`;
    return api.post(url, payload, headers);
  },

  createSchedule: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/team`;
    return api.post(url, payload, headers);
  },

  editSchedule: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/edit-team`;
    return api.post(url, payload, headers);
  },

  addTeamMembers: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/add-team`;
    return api.post(url, payload, headers);
  },

  reportBlocker: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/reportBlocker`;
    return api.post(url, payload, headers);
  },

  fetchTeamCheckins: (token, query) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/posts-team${paramsObjectToQueryString(query)}`;
    return api.get(url, headers);
  },

  fetchSingleTeam: (token, teamId) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/team/${teamId}`;
    return api.get(url, headers);
  },

  fetchTeamCheckinsByUser: token => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/posts-user`;
    return api.get(url, headers);
  },

  fetchTodayPost: (token, query) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/today-post${paramsObjectToQueryString(query)}`;
    return api.get(url, headers);
  },

  postCheckin: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/posts`;
    return api.post(url, payload, headers);
  },

  deleteTeam: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/team-delete`;
    return api.delete(url, payload, headers);
  },

  editUser: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/edit-user`;
    return api.post(url, payload, headers);
  },

  fetchTeams: token => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/team`;
    return api.get(url, headers);
  },

  fetchSlackChannel: token => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/slack-channels`;
    return api.get(url, headers);
  },

  fetchAllGoals: token => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/goals`;
    return api.get(url, headers);
  },

  addGoal: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/goals/add`;
    return api.post(url, payload, headers);
  },

  fetchDashboard: (token, query) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/dashboard${paramsObjectToQueryString(query)}`;
    return api.get(url, headers);
  },

  fetchProfile: token => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/profile`;
    return api.get(url, headers);
  },
  fetchTeamByOwner: token => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/owner-team`;
    return api.get(url, headers);
  },
  fetchTeamMembers: token => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/team-mates`;
    return api.get(url, headers);
  },
  fetchCheckinTeamMembers: token => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/team-mates?action=checkin`;
    return api.get(url, headers);
  },
  fetchRecentCheckin: (token, query) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/admin-recent-checkin${paramsObjectToQueryString(
      query
    )}`;
    return api.get(url, headers);
  },

  fetchAllUsers: (token, query) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/user-team${paramsObjectToQueryString(query)}`;
    return api.get(url, headers);
  },

  fetchActivity: (token, query) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/log-team${paramsObjectToQueryString(query)}`;
    return api.get(url, headers);
  },

  fetchBanks: (token, query) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/log-team${paramsObjectToQueryString(query)}`;
    return api.get(url, headers);
  },

  fetchGraph: (token, query) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/banks?action=fetch${paramsObjectToQueryString(
      query
    )}`;
    return api.get(url, headers);
  },

  fetchTags: (token, id) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/tags/${id}`;
    return api.get(url, headers);
  },

  fetchReportGraph: (token, id, query) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/report-graph/${id}${paramsObjectToQueryString(
      query
    )}`;
    return api.get(url, headers);
  },

  fetchReportTable: (token, id, query) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/report/${id}${paramsObjectToQueryString(query)}`;
    return api.get(url, headers);
  },

  fetchLeaderBoards: (token, id, query) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/leader-board/${id}${paramsObjectToQueryString(
      query
    )}`;
    return api.get(url, headers);
  },

  fetchReportMetrics: (token, id, query) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/report-metrics/${id}${paramsObjectToQueryString(
      query
    )}`;
    return api.get(url, headers);
  },

  fetchTeamInvite: body => {
    const url = `${BASE_URL}/team-invite`;
    return api.post(url, body);
  },

  post: (url, body, headers = createHTTPHeader()) => {
    return axios.post(url, body, { headers }).then(response => response.data);
  },

  post2: (url, body, headers = createHTTPHeader()) => {
    return axios.post(url, body, { headers }).then(response => response.data);
  },

  put: (url, body, headers = createHTTPHeader()) => {
    return axios.put(url, body, { headers }).then(response => response.data);
  },
  patch: (url, body, headers = createHTTPHeader()) => {
    return axios.patch(url, body, { headers }).then(response => response.data);
  },
  get: (url, headers = createHTTPHeader()) => {
    return axios.get(url, { headers }).then(response => response.data);
  },
  delete: (url, body, headers = createHTTPHeader()) => {
    return axios
      .delete(url, { data: body }, { headers })
      .then(response => response.data);
  },
  postForget: body => {
    const url = `${BASE_URL}/forgot`;
    return axios.post(url, body).then(response => response.data);
  },
  postReset: body => {
    const url = `${BASE_URL}/reset`;
    return axios.post(url, body).then(response => response.data);
  },
  invite: body => {
    const url = `${BASE_URL}/team-setup`;
    return axios.post(url, body).then(response => response.data);
  },
  // Integrations
  fetchIntegrations: token => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/integrations`;
    return api.get(url, headers);
  },

  integrateGithub: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/integrations-github`;
    return api.post(url, payload, headers);
  },

  integrateGeneral: (payload, token, type) => {
    const headers = createHTTPHeader(token);
    let newPayload = { ...payload, type };
    const url = `${BASE_URL}/integrations-general`;
    return api.post(url, newPayload, headers);
  },

  integrateGitlab: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/integrations-gitlab`;
    return api.post(url, payload, headers);
  },

  closeGithub: (token, query) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/close-integration${paramsObjectToQueryString(
      query
    )}`;
    return api.post(url, '', headers);
  },

  integrateSlack: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/integrations-slack`;
    return api.post(url, payload, headers);
  },

  deactivateIntegration: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/integrations-deactivate`;
    return api.post(url, payload, headers);
  },

  verifySlackCode: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/slack-callback`;
    return api.post(url, payload, headers);
  },

  createNewTeam: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/post-team`;
    return api.post(url, payload, headers);
  },

  createTeamMember: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/add-team-member`;
    return api.post(url, payload, headers);
  },

  resendInvite: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/resend`;
    return api.post(url, payload, headers);
  },

  swapTeamMember: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/swap-team-member`;
    return api.post(url, payload, headers);
  },

  fetchRepositoryIntegration: token => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/listen-integration`;
    return api.get(url, headers);
  },

  createEditTeamTitle: (payload, token) => {
    const headers = createHTTPHeader(token);
    const url = `${BASE_URL}/edit-team-name`;
    return api.post(url, payload, headers);
  },
};

export default api;
