import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Router} from '@angular/router';
import {User} from './user';
import {UserService} from './user.service';
@Component({
  moduleId: module.id,
  selector: 'users',
  templateUrl: 'users.component.html',
})
export class UsersComponent implements OnInit {
  users: User[];
  newUser: User;
  selectedUser: User;
  showDatepicker: boolean = false;
  order = 'id';
  formErrors: string[] = [];

  constructor(private heroService: UserService,
              private router: Router) {
  }

  getUsers(): void {
    this.heroService
        .getUsers()
        .then(users => this.users = users);
  }

  add(): void {
    this.formErrors = this.validate(this.newUser);
    if (this.formErrors.length > 0) {
      return;
    }
    this.heroService.create(this.newUser)
        .then(user => {
          this.users.push(user);
          this.newUser = new User();
        });
  }

  validate(user: User): string[] {
    var errors: string[] = [];
    if (!user.firstName || user.firstName.length == 0) {
      errors.push('firstName');
    }
    if (!user.lastName || user.lastName.length == 0) {
      errors.push('lastName');
    }
    if (!user.email || user.email.length == 0 || !/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/.test(user.email)) {
      errors.push('email');
    }
    if (!user.dob) {
      errors.push('dob');
    }
    return errors;
  }

  delete(user: User): void {
    this.heroService
        .delete(user.id)
        .then(() => {
          this.users = this.users.filter(h => h !== user);
        });
  }

  update(user: User): void {
    this.heroService.update(user)
        .then(() => this.selectedUser = null);
  }

  edit(user: User): void {
    this.selectedUser = user;
  }

  cancelEdit(): void {
    this.selectedUser = null;
  }

  sort(by: string): void {
    if (this.order.includes(by)) {
      if (this.order.includes('-')) {
        this.order = by;
      } else {
        this.order = '-' + by;
      }
    } else {
      this.order = by;
    }
  }

  getSortIcon(title: string): string {
    if(this.order.includes(title)) {
      if (this.order.includes('-')) {
        return 'fa fa-fw fa-sort-desc';
      } else {
        return 'fa fa-fw fa-sort-asc';
      }
    }
    return '';
  }

  ngOnInit(): void {
    this.newUser = new User();
    this.getUsers();
  }
}