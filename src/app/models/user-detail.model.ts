
export default class UserDetailModel {
  constructor(
    public login: string,
    public id: number,
    public avatarUrl: string,
    public htmlUrl: string,
    public publicRepos: string
  ) { }
}
