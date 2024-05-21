import { useLocation } from "react-router-dom";
import ReplyMailForm from "../../components/form/ReplyMailForm";

function MailReply() {
    const location = useLocation();
    const { mailNo, content } = location.state; // 이전 메일

    return (
        <main id="main" className="main">
            <div className="title">
                <h2>메일</h2>
            </div>
            <div>
                <ReplyMailForm content={content} mailNo={mailNo} />
            </div>
        </main>
    );
}

export default MailReply;