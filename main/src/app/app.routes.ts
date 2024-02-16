import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserFriendsComponent } from './user-friends/user-friends.component';
import { UserRequestsComponent } from './user-requests/user-requests.component';
import { UserSuggestionsComponent } from './user-suggestions/user-suggestions.component';
import { UserWatchComponent } from './user-watch/user-watch.component';
import { UserMarketplaceComponent } from './user-marketplace/user-marketplace.component';
import { UserPageComponent } from './user-page/user-page.component';

export const routes: Routes = [
    {
        path : '',
        component: UserPageComponent,
        title: 'Facebook'
    },
    {
        path : 'friends',
        component: UserFriendsComponent,
        title: 'Friends'
    },
    {
        path : 'friends/requests',
        component: UserRequestsComponent,
        title: 'Requests'
    },
    {
        path : 'friends/suggestions',
        component: UserSuggestionsComponent,
        title: 'Suggestions'
    },
    {
        path : 'watch',
        component: UserWatchComponent,
        title: 'Watch'
    },
    {
        path : 'marketplace',
        component: UserMarketplaceComponent,
        title: 'Marketplace'
    },
    
];
