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
            worst_football_team=data.get('worstFootballTeam', "Sevilla"),
            time_to_complete=data.get('timeToComplete', "5min")
        )
        db.session.add(new_user)
        db.session.commit()

        return jsonify(new_user.serialize()), 201    
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
    return jsonify({ "token": access_token, "user_id": user.id })


