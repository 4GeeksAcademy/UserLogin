from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token


"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)
# Allow CORS requests to this API
CORS(api)
@api.route('/Users')
def getUsers():
    Users = User.query.all()
    return jsonify([user.serialize() for user in Users])

@api.route('/addUser', methods=['POST'])
def handle_hello():
    data = request.get_json()
    try:
        new_user = User(
            time=data.get('time'),
            first_name=data.get('firstName'),
            second_name=data.get('secondName'),
            imaginary_nickname=data.get('imaginaryNickname'),
            favorite_superhero=data.get('favoriteSuperHero'),
            favorite_villain=data.get('favoriteVillain'),
            password=data.get('password'),
            eye_color=data.get('eyeColor'),
            hair_color=data.get('hairColor'),
            mail=data.get('mail'),
            age=data.get('age'),
            favorite_variable=data.get('favoriteVariable'),
            experience_rate=data.get('experienceRate'),
            phone=data.get('phone'),
            favorite_colour=data.get('favoriteColour'),
            birth_day=data.get('birthDay'),
            computer_name=data.get('computerName'),
            hated_variable=data.get('hatedVariable'),
            tabs_spaces_chaos=data.get('tabsSpacesChaos', "Tabs"),
            bug_type=data.get('bugType'),
            apologized_to_computer=data.get('apologizedToComputer', "No"),
            form_summary=data.get('formSummary'),
            honest_experience_rate=data.get('honestExperienceRate', "1"),
            potential_password=data.get('potentialPassword'),
            favorite_number=data.get('favoriteNumber', 0),
            love_for_var=data.get('loveForVar', "1"),
            fetch_preference=data.get('fetchPreference', "Await"),
            mode_preference=data.get('modePreference', "Dark mode"),
            programming_without_fingers=data.get('programmingWithoutFingers'),
            favorite_day=data.get('favoriteDay'),
            random_guess=data.get('randomGuess'),
            best_football_team=data.get('worstFootballTeam', "Sevilla"),
            time_to_complete=data.get('timeToComplete', "5min")
        )
        db.session.add(new_user)
        db.session.commit()
        
        access_token = create_access_token(identity=data.get('id'))
        return jsonify({"token" : access_token}), 201    
    except Exception as e:
        return jsonify({"error": str(e)}), 400
    

@api.route("/token", methods=["POST"])
def create_token():
    first_name = request.json.get("first_name", None)
    mail = request.json.get("mail", None)


    # Consulta la base de datos por el nombre de usuario y la contraseña
    user = User.query.filter_by(mail=mail, first_name=first_name).first()

    if user is None:
        # el usuario no se encontró en la base de datos
        return jsonify({"msg": "Bad username or password"}), 401
    
    # Crea un nuevo token con el id de usuario dentro
    access_token = create_access_token(identity=user.id)
    return jsonify({
    "token": access_token,
    "user": {
        "id": user.id,
        "time": user.time,
        "first_name": user.first_name,
        "second_name": user.second_name,
        "imaginary_nickname": user.imaginary_nickname,
        "favorite_superhero": user.favorite_superhero,
        "favorite_villain": user.favorite_villain,
        "eye_color": user.eye_color,
        "hair_color": user.hair_color,
        "mail": user.mail,
        "age": user.age,
        "favorite_variable": user.favorite_variable,
        "experience_rate": user.experience_rate,
        "phone": user.phone,
        "favorite_colour": user.favorite_colour,
        "birth_day": user.birth_day,
        "computer_name": user.computer_name,
        "hated_variable": user.hated_variable,
        "tabs_spaces_chaos": user.tabs_spaces_chaos,
        "bug_type": user.bug_type,
        "apologized_to_computer": user.apologized_to_computer,
        "form_summary": user.form_summary,
        "honest_experience_rate": user.honest_experience_rate,
        "potential_password": user.potential_password,
        "favorite_number": user.favorite_number,
        "love_for_var": user.love_for_var,
        "fetch_preference": user.fetch_preference,
        "mode_preference": user.mode_preference,
        "programming_without_fingers": user.programming_without_fingers,
        "favorite_day": user.favorite_day,
        "random_guess": user.random_guess,
        "best_football_team": user.best_football_team,
        "time_to_complete": user.time_to_complete
    }
})

