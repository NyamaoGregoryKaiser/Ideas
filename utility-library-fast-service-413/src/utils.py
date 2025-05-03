# Utility functions library

import random
import string
import json
import datetime
import time
from functools import wraps
from typing import Any, Callable, Dict, List, Optional, Union

def format_date(date: datetime.datetime, format_str: str = "%Y-%m-%d") -> str:
    """
    Format a date according to the specified format
    
    Args:
        date: The date to format
        format_str: The format string (e.g., '%Y-%m-%d')
        
    Returns:
        Formatted date string
    """
    return date.strftime(format_str)

def random_string(length: int = 10) -> str:
    """
    Generate a random string of specified length
    
    Args:
        length: Length of the string to generate
        
    Returns:
        Random string
    """
    chars = string.ascii_letters + string.digits
    return ''.join(random.choice(chars) for _ in range(length))

def deep_clone(obj: Any) -> Any:
    """
    Deep clone an object
    
    Args:
        obj: The object to clone
        
    Returns:
        Cloned object
    """
    return json.loads(json.dumps(obj))

def debounce(wait: float = 0.3):
    """
    Decorator to debounce a function
    
    Args:
        wait: The time to wait in seconds
        
    Returns:
        Debounced function
    """
    def decorator(fn):
        last_time_called = None
        timer = None
        result = None
        
        @wraps(fn)
        def debounced(*args, **kwargs):
            nonlocal last_time_called, timer, result
            
            def call_function():
                nonlocal last_time_called, result
                result = fn(*args, **kwargs)
                last_time_called = time.time()
                return result
                
            current_time = time.time()
            
            if timer is not None:
                timer.cancel()
                
            if last_time_called is None or (current_time - last_time_called) >= wait:
                return call_function()
            else:
                timer = threading.Timer(wait - (current_time - last_time_called), call_function)
                timer.start()
                return result
                
        return debounced
    return decorator