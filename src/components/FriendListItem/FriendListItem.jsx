

import css from 'components/FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.item}>
      <div className={css.wrapper}>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <span className={isOnline? css.online : css.offline}>
        </span>
      </div>
      <p className={css.name}>{name}</p>
    </li>
  );
};
