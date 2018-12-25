
export default class UserDetailModel {
  constructor(
    public login: string,
    public id: number,
    public url: string,
    public avatarUrl: string,
    public htmlUrl: string,
    public reposUrl: string,
    public gistsUrl: string,
    public followersUrl: string,
    public publicRepos: string,
    public publicGists: string,
    public name: string,
    public email: string,
    public followers: string,
    public hireable: boolean
  ) { }
}
