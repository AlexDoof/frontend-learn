import React from 'react';
import classes from './users.module.css';
import userPhoto from "../../assets/images/unknown_user.jpg"

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
                        <img className={classes.usersAva}
                            src={u.photos.small === null ? userPhoto : u.photos.small}
                            alt='user_ava' />
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => { props.unfollow(u.id) }}> Unfollow </button> :
                            <button onClick={() => { props.follow(u.id) }}> Follow </button>}
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
