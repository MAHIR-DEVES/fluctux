import { Organization } from "./organization.service";
import { User as UserSessionType } from "next-auth";

export class OrgTeam extends Organization {
  constructor(session: UserSessionType | null) {
    super(session);
  }

  async createNewTeam() {
    if(!this.session){
      return
    }
    // TODO: create new team
  }
}