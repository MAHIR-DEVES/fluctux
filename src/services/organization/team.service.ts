import { Organization } from "./organization.service";

class OrgTeam extends Organization {
  constructor() {
    super();
  }

  async createNewTeam() {
    if(!this.authorizedUser){
      return
    }
    // TODO: create new team
  }
}

export const orgTeam = new OrgTeam()