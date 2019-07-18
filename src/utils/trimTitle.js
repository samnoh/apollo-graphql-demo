const trimTitle = title => {
    return title.length < 20 ? title : title.slice(0, 20).trim() + '...';
};

export default trimTitle;
