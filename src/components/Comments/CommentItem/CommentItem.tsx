import { FC } from 'react'
import { IComment } from '../../../interfaces/interfaces';

import styles from "./CommentItem.module.css";

interface IProps {
    comment: IComment
}

const CommentItem: FC<IProps> = ({ comment }) => {
    const { title, text } = comment;
    return (
        <div className={styles.wrapper}>
            <b>{title}</b>
            <div>{text}</div>
        </div>
    )
}

export default CommentItem