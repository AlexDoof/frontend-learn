import React from 'react';
import classes from './users.module.css';
import userPhoto from "../../assets/images/unknown_user.jpg";
import { NavLink } from "react-router-dom";
import axios from 'axios';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    //************************************************************** 
    let curP = props.currentPage;
    let curPF = ((curP - 2) < 0) ? 0 : curP - 2;
    let curPL = curP + 1;
    let slicedPages = pages.slice(curPF, curPL);
    //**************************************************************


    return <div className={classes.wrapper}>
        <div>
            <span className={classes.inActivePage} onClick={(event) => { props.onPageChanged(1); }}>{`|<--`}</span>
            {slicedPages.map(page => {
                return <span className={props.currentPage === page ?
                    classes.selectedPage : classes.inActivePage}
                    onClick={(event) => { props.onPageChanged(page); }}>
                    {page}</span>
            })}<span className={classes.inActivePage} onClick={(event) => { props.onPageChanged(pagesCount); }}>{`-->|`}</span>

        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={classes.usersAva}
                                src={u.photos.small === null ? userPhoto : u.photos.small}
                                alt='user_ava' />
                        </NavLink>
                    </div>
                    <div>

                        {u.followed ?
                            <button onClick={() => {

                                axios
                                    .delete(
                                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "35557668-ba87-4d21-9aab-0f8398592d05"
                                        }
                                    }
                                    )
                                    .then((response) => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    });

                            }}> Unfollow </button> :

                            <button onClick={() => {
                                axios
                                    .post(
                                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "35557668-ba87-4d21-9aab-0f8398592d05"
                                        }
                                    },
                                    )
                                    .then((response) => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    });
                                props.follow(u.id)
                            }}> Follow </button>}

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

export default Users;
