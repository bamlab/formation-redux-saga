from flask import Flask, request, jsonify, json
app = Flask(__name__)

questions_list = {
    "1": {"test": 1},
    "2": {"test": 1}
}
questions_answer = {
    "1": None,
    "2": None,
}
questions_timer = {
    "1": None,
    "2": None,
}


@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'message': 'Not Found: ' + request.url,
    }
    resp = jsonify(message)
    resp.status_code = 404

    return resp


@app.route("/ping")
def heartbeat():
    return "pong"


@app.route("/questions", methods=['GET'])
def questions():
    return jsonify(questions_list)


@app.route("/question/<qid>", methods=['GET'])
def question(qid):
    if qid in questions:
        return jsonify({"quid": questions_list["quid"]})
    else:
        return not_found()


@app.route("/question/<qid>/answer", methods=['POST'])
def question_answer(qid):
    if qid in questions:
        answer = json.dumps(request.json)
        questions_answer[qid] = answer["selected"]
        return questions_answer
    return not_found()


@app.route("/question/<qid>/timer", methods=['POST'])
def question_timer(qid):
    if qid in questions:
        timer = json.dumps(request.json)
        questions_timer[qid] = timer["elapsed"]
        return questions_timer
    return not_found()


@app.route("/score", methods=['GET'])
def score():
    return "computing a high level score : 42"


if __name__ == '__main__':
    app.run()