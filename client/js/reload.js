/**
    Copyright (C) 2022  Schmuel Odradek
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; version 3.
    DSBLSP is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

    This product is a WIP. There are still a lot things to be done.
    The current version of the software is not meant to be already daily-driven
    in schools or companies.

    This script reloads the webpage every 15 minute to prevent over buffing.
    The chosen solution must be considered as a WIP solution as it would be
    better to find the actually issue then to just using this
    workaround.
    Also, resetting the Dashboard every 15 Minutes could (!) delete
    User-sided Input.
 */

setTimeout(function(){
    location = ''
},15*60*1000)