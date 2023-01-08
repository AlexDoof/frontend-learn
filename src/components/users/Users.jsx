import axios from "axios";
import React from "react";
import classes from './users.module.css';
import userPhoto from "../../assets/images/unknown_user.jpg"

class Users extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {    // e - event (событие)
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        //************************************************************** 
        let curP = this.props.currentPage;
        let curPF = ((curP - 2) < 0) ? 0 : curP - 2;
        let curPL = curP + 1;
        let slicedPages = pages.slice(curPF, curPL);
        //************************************************************** 
        return <div className={classes.wrapper}>
            <div>
                <span className={classes.inActivePage} onClick={(event) => { this.onPageChanged(1); }}>{`|<--`}</span>
                {slicedPages.map(page => {
                    return <span className={this.props.currentPage === page ?
                        classes.selectedPage : classes.inActivePage}
                        onClick={(event) => { this.onPageChanged(page); }}>
                        {page}</span>
                })}<span className={classes.inActivePage} onClick={(event) => { this.onPageChanged(pagesCount); }}>{`-->|`}</span>

            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={classes.usersAva}
                                src={u.photos.small === null ? userPhoto : u.photos.small  }
                                alt='user_ava' />
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => { this.props.unfollow(u.id) }}> Unfollow </button> :
                                <button onClick={() => { this.props.follow(u.id) }}> Follow </button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    }
}

export default Users;