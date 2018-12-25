
export default class UserListModel {
  constructor(
    public id: number,
    public apiUrl: string,
    public htmlUrl: string,
    public login: string,
    public avatarUrl: string,
    public textMatches: any[]
  ) { }
}
