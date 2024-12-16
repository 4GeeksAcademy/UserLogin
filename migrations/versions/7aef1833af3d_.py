"""empty message

Revision ID: 7aef1833af3d
Revises: 
Create Date: 2024-12-16 17:14:27.096724

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7aef1833af3d'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('time', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=120), nullable=False),
    sa.Column('second_name', sa.String(length=120), nullable=True),
    sa.Column('imaginary_nickname', sa.String(length=120), nullable=True),
    sa.Column('favorite_superhero', sa.String(length=120), nullable=True),
    sa.Column('favorite_villain', sa.String(length=120), nullable=True),
    sa.Column('password', sa.String(length=120), nullable=False),
    sa.Column('eye_color', sa.String(length=10), nullable=True),
    sa.Column('hair_color', sa.String(length=10), nullable=True),
    sa.Column('mail', sa.String(length=120), nullable=False),
    sa.Column('age', sa.Integer(), nullable=False),
    sa.Column('favorite_variable', sa.String(length=10), nullable=True),
    sa.Column('experience_rate', sa.String(length=10), nullable=True),
    sa.Column('phone', sa.String(length=120), nullable=True),
    sa.Column('favorite_colour', sa.String(length=10), nullable=True),
    sa.Column('birth_day', sa.String(length=120), nullable=True),
    sa.Column('computer_name', sa.String(length=120), nullable=True),
    sa.Column('hated_variable', sa.String(length=10), nullable=True),
    sa.Column('tabs_spaces_chaos', sa.String(length=10), nullable=True),
    sa.Column('bug_type', sa.String(length=120), nullable=True),
    sa.Column('apologized_to_computer', sa.String(length=30), nullable=True),
    sa.Column('form_summary', sa.Text(), nullable=True),
    sa.Column('honest_experience_rate', sa.String(length=10), nullable=True),
    sa.Column('potential_password', sa.String(length=120), nullable=True),
    sa.Column('favorite_number', sa.Integer(), nullable=True),
    sa.Column('love_for_var', sa.String(length=40), nullable=True),
    sa.Column('fetch_preference', sa.String(length=10), nullable=True),
    sa.Column('mode_preference', sa.String(length=10), nullable=True),
    sa.Column('programming_without_fingers', sa.String(length=120), nullable=True),
    sa.Column('favorite_day', sa.String(length=120), nullable=True),
    sa.Column('random_guess', sa.String(length=20), nullable=True),
    sa.Column('best_football_team', sa.String(length=10), nullable=True),
    sa.Column('time_to_complete', sa.String(length=10), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('mail')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    # ### end Alembic commands ###